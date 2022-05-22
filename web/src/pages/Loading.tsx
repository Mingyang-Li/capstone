import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <span className="visually-hidden content-center items-center place-items-center">
          <CircularProgress />
          <p className="antialiased text-2xl font-bold">
            Making some more money...
          </p>
        </span>
      </div>
    </div>
  );
};

export default Loading;
