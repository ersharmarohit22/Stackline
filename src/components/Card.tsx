import {FC,CSSProperties,ReactNode} from 'react';

interface CardProps {
  title?: string;
  content?: string;
  children: ReactNode;
  styleCss?: React.CSSProperties;
}

const Card: FC<CardProps> = ({ styleCss,children}) => {
  const cardStyle: CSSProperties = {
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    margin: '10px 10px 5px 10px',
    ...styleCss
  };
  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};



export default Card;