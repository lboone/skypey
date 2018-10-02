import React from "react";
import User from "../../containers/user/User";
import "./Sidebar.css";

const Sidebar = ({ contacts }) => {
  const renderContacts = () =>
    contacts.map(contact => <User key={contact.user_id} user={contact} />);

  return <aside className="Sidebar">{renderContacts()}</aside>;
};
export default Sidebar;
