import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '负债名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '家庭成员',
    align:"center",
    dataIndex: 'memeber_dictText'
   },
   {
    title: '负债类别',
    align:"center",
    dataIndex: 'loanType_dictText'
   },
   {
    title: '币种',
    align:"center",
    dataIndex: 'currencyCode_dictText'
   },
   {
    title: '金额',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '负债期限',
    align:"center",
    dataIndex: 'loanTerm'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'description'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "创建日期",
      field: "createTime",
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      colProps: {span: 6},
 	},
	{
      label: "负债名称",
      field: "name",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "家庭成员",
      field: "memeber",
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"family_member"
      },
      colProps: {span: 6},
 	},
	{
      label: "负债类别",
      field: "loanType",
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"loan_type"
      },
      colProps: {span: 6},
 	},
	{
      label: "币种",
      field: "currencyCode",
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"currency_code"
      },
      colProps: {span: 6},
 	},
	{
      label: "金额",
      field: "amount",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "负债期限",
      field: "loanTerm",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '负债名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入负债名称!'},
          ];
     },
  },
  {
    label: '家庭成员',
    field: 'memeber',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"family_member"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入家庭成员!'},
          ];
     },
  },
  {
    label: '负债类别',
    field: 'loanType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"loan_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入负债类别!'},
          ];
     },
  },
  {
    label: '币种',
    field: 'currencyCode',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"currency_code"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入币种!'},
          ];
     },
  },
  {
    label: '金额',
    field: 'amount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入金额!'},
          ];
     },
  },
  {
    label: '负债期限',
    field: 'loanTerm',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入负债期限!'},
          ];
     },
  },
  {
    label: '描述',
    field: 'description',
    component: 'InputTextArea',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
//子表表格配置
export const loanChangeColumns: JVxeColumn[] = [
    {
      title: '变动类别',
      key: 'changeType',
      type: JVxeTypes.select,
      options:[],
      dictCode:"change_type",
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '金额',
      key: 'amount',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '备注',
      key: 'note',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}