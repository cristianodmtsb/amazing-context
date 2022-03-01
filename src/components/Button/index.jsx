import P from 'prop-types';

export function Button({label, onButtonClick}) {
  return (
    <button onClick={onButtonClick}>{label}</button>
  )
}

Button.propTypes = {
  label: P.string.isRequired,
  onButtonClick: P.func.isRequired,
}
