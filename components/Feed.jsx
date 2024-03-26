'use client';

import { useState, useEffect } from 'react';

import ResumeCard from './ResumeCard';

const ResumeCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 resume_layout">
      {data.map((post) => (
        <ResumeCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/resume");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.email) ||
        regex.test(item.creator.username) ||
        regex.test(item.job) ||
        regex.test(item.education) ||
        regex.test(item.city) ||
        regex.test(item.about)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };


  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Поиск резюме"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

       {/* All Prompts */}
       {searchText ? (
        <ResumeCardList
          data={searchedResults}
        />
      ) : (
        <ResumeCardList data={allPosts}/>
      )}
    </section>
  )
}

export default Feed
