import { MARKS } from '@contentful/rich-text-types';
import { PlatePlugin, RenderLeafProps } from '../../internal/types';
export declare const ToolbarDropdownStrikethroughButton: {
    ({ isDisabled }: {
        isDisabled?: boolean;
    }): JSX.Element | null;
    displayName: MARKS;
};
export declare const ToolbarStrikethroughButton: {
    ({ isDisabled }: {
        isDisabled?: boolean;
    }): JSX.Element | null;
    displayName: MARKS;
};
export declare function Strikethrough(props: RenderLeafProps): JSX.Element;
export declare const createStrikethroughPlugin: () => PlatePlugin;
