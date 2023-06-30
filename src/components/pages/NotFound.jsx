import notFound from 'images/notFound.jpg';

const NotFound = () => {
  return (
    <div>
      <img
        style={{
          display: 'block',
          marginTop: '60px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '500px',
          
        }}
        src={notFound}
        alt="not Found"
      />
    </div>
  );
};

export default NotFound;
