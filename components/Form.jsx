import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} резюме</span>
      </h1>
      <p className="desc text-left max-w-md">
        Опубликуйте резюме и начните свой путь к успешной карьере уже сегодня.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Профессия
          </span>
          <input
            value={post.job}
            onChange={(e) => setPost({ ...post, job:
              e.target.value })}
            type="text"
            placeholder="Профессия"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Уровень образования
          </span>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={post.education}
            required
            onChange={(e) => 
              setPost({ ...post, education:
                e.target.value })}
          >
            <option value="" disabled>Выберите уровень образования</option>
            <option value="Основное общее">Основное общее</option>
            <option value="Среднее общее">Среднее общее</option>
            <option value="Среднее профессиональное">Среднее профессиональное</option>
            <option value="Бакалавриат">Бакалавриат</option>
            <option value="Cпециалитет, магистратура">Cпециалитет, магистратура</option>
          </select>
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Город проживания
          </span>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={post.city}
            required
            onChange={(e) => 
              setPost({ ...post, city:
                e.target.value })}
          >
            <option value="" disabled>Выберите город из списка</option>
            <option value="Удалённо">Удалённо</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Москва">Москва</option>
            <option value="Новосибирск">Новосибирск</option>
            <option value="Екатеринбург">Екатеринбург</option>
            <option value="Нижний Новгород">Нижний Новгород</option>
            <option value="Казань">Казань</option>
            <option value="Челябинск">Челябинск</option>
          </select>
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            О себе {` `}
            <span className="font-normal">
              (опыт работы, личные качества, дополнительные сведения об образовании, способы связаться с вами)
            </span>
          </span>

          <textarea
            value={post.about}
            onChange={(e) => setPost({ ...post, about:
              e.target.value })}
            placeholder="Расскажите о себе"
            required
            className="form_textarea "
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Отмена
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary bg-primary-blue rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form