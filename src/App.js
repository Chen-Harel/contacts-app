import "./App.css";
import Card from "./components/Card";
import contacts from "./components/contacts";
import Avatar from "./components/Avatar";

function createCard(contact) {
  return <Card 
  key={contact.id}
  name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email} />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQEUmD8FVFBMrg/profile-displayphoto-shrink_800_800/0/1655479743758?e=1662595200&v=beta&t=V_8jd5b4X0a8QSQN2U6efyVgGiK7IcjEFBXWplQCKnQ" alt="Chen Harel"/>
      <p>I'm Chen! This is my small contacts page I made using React!</p>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
