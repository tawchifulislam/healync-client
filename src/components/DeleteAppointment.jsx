'use client';

import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';

export function DeleteAppointment({ booking, onDeleteSuccess }) {
  const { _id, doctorName } = booking;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${_id}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      },
    );

    await res.json();
    document.getElementById(`delete_modal_${_id}`).close();
    onDeleteSuccess();
  };

  return (
    <>
      <button
        onClick={() =>
          document.getElementById(`delete_modal_${_id}`).showModal()
        }
        className="h-8 px-3 rounded-lg bg-rose-50/60 hover:bg-rose-600 text-rose-600 hover:text-white border border-rose-100 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
      >
        <FiTrash2 size={11} />
        <span>Cancel</span>
      </button>

      <dialog
        id={`delete_modal_${_id}`}
        className="fixed inset-0 z-50 m-auto h-fit w-full max-w-sm rounded-3xl bg-white border border-slate-200/60 shadow-2xl p-0 overflow-hidden backdrop:bg-black/40 backdrop:backdrop-blur-sm open:flex open:flex-col animate-fadeIn select-none text-left"
      >
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-[#0F172A] font-black text-lg tracking-tight">
              Cancel Appointment
            </h3>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-2 leading-relaxed">
              Are you sure you want to cancel your appointment with{' '}
              <strong className="text-[#0F172A] font-bold">{doctorName}</strong>
              ? This action cannot be undone.
            </p>
          </div>

          <div className="flex gap-2.5 justify-end border-t border-slate-100 pt-4 mt-2">
            <button
              type="button"
              onClick={() =>
                document.getElementById(`delete_modal_${_id}`).close()
              }
              className="h-9 px-4 rounded-xl text-slate-500 border border-slate-200 bg-white hover:bg-slate-50 font-semibold text-xs transition-all cursor-pointer shadow-sm"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="h-9 px-5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
