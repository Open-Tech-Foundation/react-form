import { InputHTMLAttributes, useRef } from 'react';
import { useField } from '.';

export interface FileFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  multiple?: boolean;
  onFilesChange?: (files: FileList | string) => void;
  clearable?: boolean;
}

export default function FileField(props: FileFieldProps) {
  const { name, multiple, clearable, onFilesChange, ...otherProps } = props;
  const { field, setValue } = useField(name);
  const iRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={iRef}
        name={name}
        type="file"
        multiple={Boolean(multiple)}
        onChange={(e) => {
          if (onFilesChange) {
            onFilesChange(e.target.files as FileList);
          }
          setValue(e.target.files);
        }}
        onBlur={field.onBlur}
        {...otherProps}
      />
      {clearable ? (
        <button
          type="button"
          onClick={() => {
            (iRef.current as HTMLInputElement).value = '';
            setValue('');
            if (onFilesChange) {
              onFilesChange('');
            }
          }}
        >
          Clear
        </button>
      ) : null}
    </>
  );
}
