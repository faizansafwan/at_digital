export default function CustomButton({ children, className = '' }) {
    return (
      <button className={`bg-secondary px-6 py-2 rounded-md font-semibold 
            hover:brightness-90 transition ${className} ease-in duration-300`}>
        {children}
      </button>
    );
  }
  