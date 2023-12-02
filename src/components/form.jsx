import { useState } from 'react';
export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-row gap-[14px] items-center mt-4'
    >
      <fieldset></fieldset>
    </form>
  );
}
