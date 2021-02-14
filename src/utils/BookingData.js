export default bookingData = {
  bookingDraftId: '',
  //api create-booking

  //EstimateScreen(1)**
  total_rooms: '',
  //EstimateScreen(1)**
  total_bathrooms: '',
  //RequestScreen(3)**
  services: [], //optional

  //api add-booking-address/bookingDraftId

  //EnterAddressScreen(2)**
  address: '',
  //EnterAddressScreen(2)**
  lat: '',
  //EnterAddressScreen(2)**
  lng: '',
  //EnterAddressScreen(2)**
  actual_address: '',

  //api schedule-date-time/bookingDraftId

  //RequestScreen(3)**
  start_date: '',
  //RequestScreen(3)
  time: '',
  //RequestScreen(3)
  time_am_pm: '',
  //RequestScreen(3) **
  is_pet: '', //0 ya 1
  //RequestScreen(3)
  pet_count: '', //optional
  //RequestScreen(3)
  pet_id: '',
};
