import type { InputHTMLAttributes } from 'react';
import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from 'react-hook-form';
import { IoMdAlert } from 'react-icons/io';

import { cn } from '@/lib/cn';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  id,
  label,
  type = 'text',
  disabled,
  register,
  errors,
  required,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        className={cn(
          'border-gray-300 focus:border-blue-500 disabled:bg-transparent peer w-full rounded border-[1px] bg-white p-3 outline-none transition focus:border-2',
          { 'border-red-500': errors[id], 'focus:border-red-500': errors[id] },
          className
        )}
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        {...rest}
      />
      <label
        className={cn(
          'text-gray-600 peer-focus:text-blue-500 absolute -top-3 left-3 cursor-text bg-white px-1 text-sm font-normal transition-all peer-placeholder-shown:translate-y-[23px] peer-placeholder-shown:text-base peer-focus:translate-y-0 peer-focus:text-sm',
          { 'peer-focus:text-red-500': errors[id] }
        )}
        htmlFor={id}
      >
        {label}
      </label>
      {errors[id] && (
        <div className="text-red-500 mt-1 flex flex-row items-center text-sm">
          <IoMdAlert className="mr-1" />
          {`${errors[id]?.message}`}
        </div>
      )}
    </div>
  );
};

export default Input;
