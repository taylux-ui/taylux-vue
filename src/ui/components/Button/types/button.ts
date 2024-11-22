export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;
export const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
export const ICON_POSITIONS = ['left', 'right', 'center'] as const;

type ButtonSize = (typeof BUTTON_SIZES)[number];
type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
type IconPosition = (typeof ICON_POSITIONS)[number];

export interface ButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    disabled?: boolean;

    loading?: boolean;
    loadingIcon?: string;
    loadingPosition?: IconPosition;

    icon?: string;
    iconPosition?: IconPosition;

    ariaLabel?: string;
    loadingLabel?: string;

    block?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
