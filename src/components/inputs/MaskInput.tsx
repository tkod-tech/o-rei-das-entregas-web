import { Input } from '../ui/input';
import { forwardRef } from 'react';

interface MaskInputProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

const MaskInput = forwardRef<HTMLInputElement, MaskInputProps>(({ id, value, onChange, placeholder, required, type }, forwardedRef) => {
  return (
    <>  
      <Input 
        ref={forwardedRef} 
        id={id} 
        placeholder={placeholder} 
        required={required} 
        type={type} 
        value={value} 
        onChange={onChange}
      />
    </>
  );
});

export default MaskInput;