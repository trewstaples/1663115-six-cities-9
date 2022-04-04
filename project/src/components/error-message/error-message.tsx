import { getError } from '../../store/user-data/selector';
import { useAppSelector } from '../../hooks';
import { ErrorMessageStyle } from './error-message-style';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error) {
    return (
      <div
        style={{
          position: `${ErrorMessageStyle.Position}`,
          top: `${ErrorMessageStyle.Top}`,
          right: `${ErrorMessageStyle.Right}`,
          padding: `${ErrorMessageStyle.Padding}`,
          backgroundColor: `${ErrorMessageStyle.BackgroundColor}`,
          color: `${ErrorMessageStyle.Color}`,
          borderRadius: `${ErrorMessageStyle.BorderRadius}`,
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
