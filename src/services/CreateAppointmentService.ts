import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRespository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentServide {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appoointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appoointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appoointmentDate,
    });

    await appointmentsRepository.save(appointment);
    return appointment;
  }
}

export default CreateAppointmentServide;
