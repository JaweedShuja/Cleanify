const hostName = 'https://cleanify.technottix.com/api/v1/';
const Login = 'login';
const RegisterNumber = 'register-number';
const MatchOTP = 'match-otp';
const ResendOTP = 'resend-otp';
const RegisterEmail = 'register-email';
const RegisterPassword = 'register-password';
const RegisterName = 'register-name';
const CreateBooking = 'create-booking';
const GetExtraData = 'get-rooms-and-extras-data';
const AddBookingAddress = 'add-booking-address';
const ScheduleDateTime = 'schedule-date-time';

function getFullApi(api) {
  return hostName + api;
}

export const LoginAPI = getFullApi(Login);

export const RegisterNumberAPI = getFullApi(RegisterNumber);

export function MatchOtpAPI(draftID) {
  return getFullApi(MatchOTP) + '/' + draftID;
}

export function ResendOTPAPI(draftID) {
  return getFullApi(ResendOTP) + '/' + draftID;
}

export function RegisterEmailAPI(draftID) {
  return getFullApi(RegisterEmail) + '/' + draftID;
}

export function RegisterPasswordAPI(draftID) {
  return getFullApi(RegisterPassword) + '/' + draftID;
}

export function RegisterNameAPI(draftID) {
  return getFullApi(RegisterName) + '/' + draftID;
}

export const GetExtraDataAPI = getFullApi(GetExtraData);

export const CreateBookingAPI = getFullApi(CreateBooking);

export function AddBookingAddressAPI(draftID) {
  return getFullApi(AddBookingAddress) + '/' + draftID;
}

export function ScheduleDateTimeAPI(draftID) {
  return getFullApi(ScheduleDateTime) + '/' + draftID
}