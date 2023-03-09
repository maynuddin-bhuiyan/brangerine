import React from "react";
import styles from "./BlogDetailsBody.module.css";

const BlogDetailsBody3 = () => {
  return (
    <div className="container">
      <div className={styles.div}>
        <p className={styles.text}>
          If you’re a note taker you’ve probably heard of Evernote. It’s a note
          taking app available on all devices, but not just any note taking app,
          in fact thats an understatement. Evernote has stood the test of time
          because of how well it syncs with all of your devices. In this blog
          post I’m going to cover how I use Evernote to remain productive in the
          busy world we live in today.{" "}
        </p>
        <p className={styles.text}>
          Ok so what is Evernote first? It is cloud storage productivity app
          that organizes your life. Evernote makes it easy to snap a photo of a
          slide deck, record a meeting, keep track of tasks, share a document,
          and the list goes on. To learn all of Evernote’s features go{" "}
          <a className={styles.link} href="https://evernote.com/">
            here.
          </a>
        </p>
      </div>
      <div className={styles.div}>
        <h1 className={styles.title}>Top 5 Tips </h1>
        <h1 className={styles.title}>#1 Organize everything</h1>
        <p className={styles.text}>
          Think of Evernote as your digital backpack. It stores everything you
          need in one neat little app on all of your devices. Yes all of them
          (with subscription, it’s totally worth). First things first, create
          notebooks for all the different categories you’d like to keep
          organized. Personal, Work, School, etc.{" "}
        </p>
        <h1 className={styles.title}>#2 Creating Tags</h1>
        <p className={styles.text}>
          One of the Evernotes key features is it’s ability to tag notes. By
          using the tags correctly, you can take notes with out having to search
          as deeply with in the notebook. Not only will tags help you stay
          organized they can also do the opposite if you put too many tags that
          never get used, to prevent this I would recommend simplifying them to
          only a few per notebook.{" "}
        </p>
        <p className={styles.text}>
          For example: Tags you might use for work would be are: Projects,
          Events, promotions, meetings, taxes, receipts, schedule, etc.
        </p>
        <h1 className={styles.title}>#3 Remove the Clutter (other apps)</h1>
        <p className={styles.text}>
          This was a game changer for me. When I started using Evernote, I was
          only using it partially to take my notes, I found myself still using
          the iphone notes app. That became a problem when it came time to
          search for things, I’d have to check both apps and it became a
          headache at the end of the day. I finally ended my relationship with
          Notes and devoted myself to Evernote. The transition took some time to
          move all my notes into one place but soon as I did. I was a like a
          well oiled machine. I recommend this for that reason and all the
          features that other notes app lacks, Evernote picks up with ease.
        </p>
        <p>
          {" "}
          <span className={styles.title}>Team Tip: </span> Evernote has a
          feature called Stacks it allows you to organize multiple notebooks
          under one “Stack” to further clean up the interface. If you have more
          than one job you might have a stack Titled Work and within that stack
          have all your work notebooks together. It’s important to note that
          stacks are put together for you and you only so you won’t be able to
          share stacks however notebooks and notes with in the stacks may still
          be shared.
        </p>
        <h1 className={styles.title}>#4 Share notes/ notebooks</h1>
        <p className={styles.text}>
          Keep those close to you up to date with cloud storage sharing. I share
          notebooks with friends for vacation itineraries (save passports for
          extra protection while traveling internationally), project notebooks
          amongst colleagues, school assignments with your classmates, there is
          no limit to the number of shared notebooks you have.{" "}
        </p>
        <p className={styles.text}>
          The original creator has access to permissions. This is perfect for
          team members that need access to important information on a project.{" "}
        </p>
        <p className={styles.text}>
          {" "}
          <span className={styles.title}>Team Tip: </span> Brangerine has a
          shared folder for client projects, brand guidelines, design tips,
          social media, & meetings.{" "}
        </p>
        <h1 className={styles.title}>#5 Use it Daily</h1>
        <p className={styles.text}>
          This might feel like over kill at first so take your time and just get
          used to the habit of taking notes. My first notes with Evernote were
          back in 2009 literally a decade ago. From what I’ve learned is I could
          have saved plenty of time fumbling through paperwork, journals, if I
          would of organized those early on using Evernote. Between the voice,
          photo, and text based tools Evernote makes it easy to capture
          something that is important to you and makes easy to find later.{" "}
        </p>
        <p>
          <span className={styles.title}>Team Tip:</span> If you want to take it
          one step further and up your note taking experience to the next level
          check this out{" "}
          <a
            className={styles.link}
            href="https://evernote.com/blog/tips-for-a-more-paperless-life-with-evernote/"
          >
            8 tips on going paperless
          </a>{" "}
          with Evernote! Save the Trees!{" "}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailsBody3;
