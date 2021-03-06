export interface StackConfig {
  sort?: string|string[];
  offset?: string;
}

export const stackConfig = {
  type: ['boolean', 'object'],
  default: {},
  description: 'Enable stacking (for bar and area marks only).',
  properties: {
    sort: {
      oneOf: [{
        type: 'string',
        enum: ['ascending', 'descending']
      },{
        type: 'array',
        items: {type: 'string'},
      }],
      description: 'Order of the stack. ' +
        'This can be either a string (either "descending" or "ascending")' +
        'or a list of fields to determine the order of stack layers.' +
        'By default, stack uses descending order.'
    },
    offset: {
      type: 'string',
      enum: ['zero', 'center', 'normalize']
      // TODO(#620) refer to Vega spec once it doesn't throw error
      // enum: vgStackSchema.properties.offset.oneOf[0].enum
    }
  }
};
