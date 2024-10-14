import PropTypes from 'prop-types';

const FeatureCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="bg-white p-6 shadow-sm rounded-md max-w-[440px]">
            <div className="flex flex-row items-center gap-2 py-2">
                <img src={imgURL} alt={label} width={35} height={35} className="card-icon"/>
                <h3 className="card-title">
                {label}
                </h3>
            </div>
            <p className="card-text py-1">
                {subtext}
            </p>
        </div>
    );
};

FeatureCard.propTypes = {
    imgURL: PropTypes.string.isRequired,  // imgURL is required and should be a string
    label: PropTypes.string.isRequired,   // title is required and should be a string
    subtext: PropTypes.string.isRequired, // subtext is required and should be a string
};

export default FeatureCard;