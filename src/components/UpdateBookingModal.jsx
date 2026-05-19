'use client';

import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
} from '@heroui/react';
import { FiEdit2, FiUser, FiClock, FiPhone } from 'react-icons/fi';

export default function UpdateBookingModal({ booking, onUpdateSuccess }) {
  const { _id, patientName, appointmentTime, phone } = booking || {};

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${_id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      },
    );

    await res.json();
    onUpdateSuccess();
  };

  if (!booking) return null;

  return (
    <Modal>
      <Button
        variant="light"
        className="h-8 px-3 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0284C7] hover:border-[#0284C7] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer bg-white"
      >
        <FiEdit2 size={11} />
        <span>Update</span>
      </Button>

      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-white border border-slate-200/60 rounded-3xl p-0 overflow-hidden shadow-2xl select-none text-left">
            <Modal.CloseTrigger />
            <Modal.Header className="bg-[#F8FAFC] p-6 flex items-center gap-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7]">
                <FiClock size={20} />
              </div>
              <div>
                <h3 className="font-black text-lg text-[#0F172A] tracking-tight">
                  Update Appointment
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Modify appointment information
                </p>
              </div>
            </Modal.Header>

            <Modal.Body className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <TextField
                    defaultValue={patientName}
                    name="patientName"
                    isRequired
                  >
                    <Label className="text-xs font-bold text-slate-600">
                      Patient Name
                    </Label>
                    <div className="relative flex items-center">
                      <FiUser
                        className="absolute left-4 text-slate-400 z-10"
                        size={16}
                      />
                      <Input
                        placeholder="Enter patient full name"
                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                      />
                    </div>
                    <FieldError />
                  </TextField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <TextField defaultValue={phone} name="phone" isRequired>
                      <Label className="text-xs font-bold text-slate-600">
                        Phone Number
                      </Label>
                      <div className="relative flex items-center">
                        <FiPhone
                          className="absolute left-4 text-slate-400 z-10"
                          size={15}
                        />
                        <Input
                          type="tel"
                          placeholder="017XXXXXXXX"
                          maxLength={11}
                          pattern="^01[3-9]\d{8}$"
                          className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                        />
                      </div>
                      <FieldError />
                    </TextField>
                  </div>

                  <div className="space-y-1.5">
                    <TextField
                      defaultValue={appointmentTime}
                      name="appointmentTime"
                      isRequired
                    >
                      <Label className="text-xs font-bold text-slate-600">
                        Appointment Time
                      </Label>
                      <div className="relative flex items-center">
                        <FiClock
                          className="absolute left-4 text-slate-400"
                          size={16}
                        />
                        <Input
                          placeholder="e.g. 10:30 AM"
                          className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                        />
                      </div>
                      <FieldError />
                    </TextField>
                  </div>
                </div>

                <Modal.Footer className="flex gap-3 pt-4 justify-end border-t border-slate-100 mt-6">
                  <Button
                    slot="close"
                    variant="light"
                    className="h-10 px-4 rounded-xl text-slate-500 font-semibold text-xs hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    slot="close"
                    className="h-10 px-6 rounded-xl bg-[#0284C7] text-white font-bold text-xs hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
