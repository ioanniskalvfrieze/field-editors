import { MARKS } from '@contentful/rich-text-types';
import { PlatePlugin, RenderLeafProps } from '../../internal/types';
export declare const ToolbarCodeButton: {
    ({ isDisabled }: {
        isDisabled?: boolean;
    }): JSX.Element | null;
    displayName: MARKS;
};
export declare const ToolbarDropdownCodeButton: {
    ({ isDisabled }: {
        isDisabled?: boolean;
    }): JSX.Element | null;
    displayName: MARKS;
};
export declare function Code(props: RenderLeafProps): JSX.Element;
export declare const createCodePlugin: () => PlatePlugin;
