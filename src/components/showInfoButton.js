const SHOW_INFO_MESSAGE = 'Show info';
const HIDE_INFO_MESSAGE = 'Hide info';

export const ShowInfoButton = ({ onClick, showInfo }) => {
  return (
    <button className='rounded-full bg-indigo-600 px-3' onClick={onClick}>
      {
        showInfo ? HIDE_INFO_MESSAGE : SHOW_INFO_MESSAGE
      }
    </button>
  )
}
