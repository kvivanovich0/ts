import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center uppercase blue_gradient">
        talentosearch
      </h1>
      <p className="desc text-center">
        <span>Надежный помощник в поиске работы для <span className="blue_gradient">подростков</span> и <span className="blue_gradient">студентов</span></span>
      </p>

      <div class="flex flex-col my-8 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/vacancies" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Найти вакансию
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            {/*
            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                О нас
            </a>
            */}  
        </div>
      
      <div>
        <h1 className="p-6 head_text font-bold text-center blue_gradient">
          Опубликованные резюме
        </h1>
        
        <Feed />
      </div>
    </section>
  )
}

export default Home
