'use client';

import { useState, useEffect } from 'react';
import VacancyCard from './VacancyCard';

const VacancyCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-2 vacancy_layout">
      {data.map((post) => (
        <VacancyCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const FeedVacancies = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/vacancy");
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
        regex.test(item.salary) ||
        regex.test(item.city) ||
        regex.test(item.employment) ||
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
          placeholder="Поиск вакансии"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

       {/* All Prompts */}
       {searchText ? (
        <VacancyCardList
          data={searchedResults}
        />
      ) : (
        <VacancyCardList data={allPosts}/>
      )}
    </section>
  )
}

export default FeedVacancies;