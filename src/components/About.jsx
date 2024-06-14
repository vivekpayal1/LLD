import { LANG } from "../utils/langConstant";

const About = ({ lang }) => {
  console.log(lang)
  const data = LANG[lang];
  console.log(data);
  return (
    <>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default About;
