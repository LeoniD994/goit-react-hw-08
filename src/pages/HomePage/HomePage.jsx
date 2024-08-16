import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <h1>Welcome to the Contact Book</h1>
      <p>
        This application allows you to store and manage your personal contacts
        securely. Register or log in to access your private contact list.
      </p>
    </div>
  );
};

export default HomePage;
