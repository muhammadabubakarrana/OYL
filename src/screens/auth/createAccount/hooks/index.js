import {useState} from 'react';

export function useHooks() {
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return {accepted, setAccepted, showPassword, setShowPassword};
}
