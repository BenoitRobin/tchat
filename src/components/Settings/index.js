import React from 'react';

// == Import : local
import './styles.scss';

const Settings = () => (
  <div className="settingBlock">
    <div className="setting-zone">
      <button className="toggle-button" type="submit"> + </button>
    </div>
    <form
      action="submit"
      className="setting-zone"
    >
      <input
        type="email"
        placeholder="Your email"
      />

      <input
        type="password"
        placeholder="Your password"
      />
      <button
        className="submit-button"
        type="submit"
      >
        envoyer
      </button>

    </form>
  </div>
);

export default Settings;
