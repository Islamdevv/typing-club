import scss from "./News.module.scss";

const News = () => {
  return (
    <section className={scss.main_news}>
      <div className="container">
        <h1 className={scss.new_h1}>About .</h1>
        <div className={scss.content}>
          <div className={scss.content_div}></div>
          <div className={scss.content_about}>
            <p> A type is a minimalistic and customizable typing test. It
                features many test modes, an account system to save your typing
                speed history, and user-configurable features such as themes,
                sounds, a smooth caret, and more.</p>

                <p> A type attempts to emulate the experience of natural keyboard
                typing during a typing test, by unobtrusively presenting the
                text prompts and displaying typed characters in-place, providing
                straightforward, real-time feedback on typos, speed, and
                accuracy.</p>

                <p>
                Test yourself in various modes, track your progress and improve
                your speed. word set By default, this website uses the most
                common 200 words in the English language to generate its tests.
                </p>

                <p> You can change to an expanded set (1000 most common words) in
                the options, or change the language entirely. keybinds You can
                use tab and enter (or just tab if you have quick tab mode
                enabled) to restart the typing test.</p>

                <p> Open the command line by pressing ctrl/cmd + shift + p or esc -
                there you can access all the functionality you need without
                touching your mouse stats wpm - total number of characters in
                the correctly typed words (including spaces), divided by 5 and
                normalised to 60 seconds.</p>

                <p> Raw wpm - calculated just like wpm, but also includes incorrect
                words. acc - percentage of correctly pressed keys. char -
                correct characters / incorrect characters. Calculated after the
                test has ended. consistency - based on the variance of your raw
                wpm. Closer to 100% is better.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;


