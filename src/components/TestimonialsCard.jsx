import PropTypes from 'prop-types';

const TestimonialsCard = ({ imgURL, label, company, subtext }) => {
  return (
    <div className="flex flex-col gap-1 items-center bg-bgColor p-6 shadow-sm rounded-md max-w-[440px]">
      <img src={imgURL} alt={label} width={80} height={80} className={`rounded-full border-4 border-white -mt-14 bg-[{ imgURL }]`}/>
      <h3 className="card-title pt-2">{label}</h3>
      <h5 className="card-title text-subHeaderTxt">{company}</h5>
      <p className="card-text py-4 text-center">
        {subtext}
      </p>
    </div>
  );
}

TestimonialsCard.propTypes = {
    imgURL: PropTypes.string.isRequired,  // imgURL is required and should be a string
    label: PropTypes.string.isRequired,   // title is required and should be a string
    company: PropTypes.string.isRequired,   // title is required and should be a string
    subtext: PropTypes.string.isRequired, // subtext is required and should be a string
};

export default TestimonialsCard;