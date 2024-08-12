import { MARKS } from '@contentful/rich-text-types';
import { PlatePlugin, RenderLeafProps } from '../../internal/types';
export declare const ToolbarUnderlineButton: {
    ({ isDisabled }: {
        isDisabled?: boolean;
    }): JSX.Element | null;
    displayName: MARKS;
};
export declare function Underline(props: RenderLeafProps): JSX.Element;
export declare const createUnderlinePlugin: () => PlatePlugin;
