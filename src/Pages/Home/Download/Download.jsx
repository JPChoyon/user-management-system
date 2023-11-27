import appstore from '../../../assets/app-store.png';
import google from '../../../assets/google-play.png';

const Download = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="text-center md:w-2/4 mx-auto my-6"
      >
        <h2 className="text-center text-4xl font-extrabold">
          Get Our Apps In Anywhere
        </h2>
        <div className="mt-2 mx-auto w-80">
          <span className="inline-block w-52 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-10 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-6 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>
        <p className="my-5 font-extralight">
          User Management App Easily Manage and Organize Users.Download now and
          streamline your user management process!
          <br />{" "}
          <span className='font-bold'>
            Note: Please ensure compatibility with your system requirements
            before downloading.
          </span>
        </p>
        <div className="md:flex gap-5 mx-auto w-2/3">
          <img
            data-aos="fade-left"
            data-aos-duration="3000"
            className="mb-4"
            src={appstore}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-duration="3000"
            className="mb-4"
            src={google}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Download;