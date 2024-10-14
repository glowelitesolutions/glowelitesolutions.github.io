import PropTypes from 'prop-types';

const StatisticsCard = ({ label, icon, value }) => {
  return (
    <div className="flex flex-col gap-0 items-center">
      <img src={icon} alt={label} className="w-12 lg:w-16"/>
      <h3 className="card-title text-subHeaderTxt text-3xl">{value}</h3>
      <h5 className="card-title text-subHeaderTxt">{label}</h5>
    </div>
  )
}

StatisticsCard.propTypes = {
    icon: PropTypes.string.isRequired,  // imgURL is required and should be a string
    label: PropTypes.string.isRequired,   // title is required and should be a string
    value: PropTypes.string.isRequired,   // title is required and should be a string
};

export default StatisticsCard;