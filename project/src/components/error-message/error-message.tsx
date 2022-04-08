import { getError } from '../../store/user-data/selector';
import { useAppSelector } from '../../hooks';

import './css/error-alert.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error) {
    return (
      <div className="error-alert" data-testid="error-alert">
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
