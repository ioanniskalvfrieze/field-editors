import { FieldAppSDK } from '@contentful/app-sdk';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
export declare const VALIDATIONS: {
    ENABLED_MARKS: string;
    ENABLED_NODE_TYPES: string;
};
export declare const DEFAULT_ENABLED_NODE_TYPES: string[];
export declare const VALIDATABLE_NODE_TYPES: (INLINES | BLOCKS.DOCUMENT | BLOCKS.HEADING_1 | BLOCKS.HEADING_2 | BLOCKS.HEADING_3 | BLOCKS.HEADING_4 | BLOCKS.HEADING_5 | BLOCKS.HEADING_6 | BLOCKS.OL_LIST | BLOCKS.UL_LIST | BLOCKS.LIST_ITEM | BLOCKS.HR | BLOCKS.QUOTE | BLOCKS.EMBEDDED_ENTRY | BLOCKS.EMBEDDED_ASSET | BLOCKS.EMBEDDED_RESOURCE | BLOCKS.TABLE | BLOCKS.TABLE_ROW | BLOCKS.TABLE_CELL | BLOCKS.TABLE_HEADER_CELL)[];
export declare const isNodeTypeEnabled: (field: FieldAppSDK["field"], nodeType: any) => boolean;
export declare const isMarkEnabled: (field: FieldAppSDK["field"], mark: any) => boolean;
