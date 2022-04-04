import { getError } from '../../store/user-data/selector';
import { useAppSelector } from '../../hooks';

const enum ErrorMessageStyle {
  Position = 'fixed',
  Top = '30px',
  Right = '30px',
  Padding = '10px',
  BackgroudColor = '#d96666',
  Color = 'White',
  BorderRadius = '5px',
}

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
          backgroundColor: `${ErrorMessageStyle.BackgroudColor}`,
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
