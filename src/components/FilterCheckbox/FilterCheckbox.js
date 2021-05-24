import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onShortClick }) {
  const [switcherActive, setSwitcherActive] = useState(false);

  const handleSwitcherClick = function (e) {
    setSwitcherActive(!switcherActive);
    onShortClick();
  };

  let switcherOff = switcherActive ? 'switcher__off switcher__off_enabled' : 'switcher__off';
  let switcherOn = switcherActive ? 'switcher__on switcher__on_enabled' : 'switcher__on';
  let switcherButtonEnabled = switcherActive
    ? 'switcher__button switcher__button_enabled'
    : 'switcher__button';
  let switcherButtonDisabled = !switcherActive
    ? 'switcher__button switcher__button_enabled'
    : 'switcher__button';

  return (
    <div className="switcher" onClick={handleSwitcherClick}>
      <div className={switcherOff}>
        <div className={switcherButtonDisabled}></div>
      </div>
      <div className={switcherOn}>
        <div className={switcherButtonEnabled}></div>
      </div>
      <p className="switcher__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
