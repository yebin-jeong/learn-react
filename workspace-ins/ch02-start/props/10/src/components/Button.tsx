interface ButtonProps {
  children: string;
  color?: 'red' | 'green' | 'blue';
  onClick: (event: React.MouseEvent) => void;
}

function Button({ children, color, onClick: handleClick }: ButtonProps){

  return (
    <button 
        type="button" 
        onClick={ handleClick } 
        style={{ backgroundColor: color }}
        className="rounded-button"
      >{ children }</button>
  );
}

export default Button;