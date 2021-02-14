export function LoginPayloads(email, password) {
  return JSON.stringify({
    email: email,
    password: password,
  });
}

export function RegisterNumberPayloads(phone_number) {
  return JSON.stringify({
    phone_number: phone_number,
  });
}

export function MatchOtpPayloads(otp) {
  return JSON.stringify({
    otp: otp,
  });
}

export function RegisterEmailPayloads(email) {
  return JSON.stringify({
    email: email,
  });
}

export function RegisterPasswordPayloads(password) {
  return JSON.stringify({
    password: password,
  });
}

export function RegisterNamePayloads(first_name, last_name) {
  return JSON.stringify({
    first_name: first_name,
    last_name: last_name,
  });
}

export function CreateBookingPayload(total_rooms, total_bathrooms, services) {
  return JSON.stringify({
    total_rooms: total_rooms,
    total_bathrooms: total_bathrooms,
    services: services,
  });
}

export function AddBookingAddressPayload(address, lat, lng, actual_address) {
  return JSON.stringify({
    address: address,
    lat: lat,
    lng: lng,
    actual_address: actual_address,
  });
}

export function ScheduleDateTimePayload(start_date, time, time_am_pm, is_pet, pet_count, pet_id) {
  return JSON.stringify({
    start_date: start_date,
    time: time,
    time_am_pm: time_am_pm,
    is_pet: is_pet,
    pet_count: pet_count,
    pet_id: pet_id
  })
}