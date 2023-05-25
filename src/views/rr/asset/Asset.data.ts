import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '资产名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '家庭成员',
    align:"center",
    dataIndex: 'member_dictText'
   },
   {
    title: '资产类别',
    align:"center",
    dataIndex: 'assetType_dictText'
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
    title: '描述',
    align:"center",
    dataIndex: 'description'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "创建日期",
      field: 'createTime',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      colProps: {span: 6},
 	},
	{
      label: "资产名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "家庭成员",
      field: 'member',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"family_member"
      },
      colProps: {span: 6},
 	},
	{
      label: "资产类别",
      field: 'assetType',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"asset_type"
      },
      colProps: {span: 6},
 	},
	{
      label: "币种",
      field: 'currencyCode',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"currency_code"
      },
      colProps: {span: 6},
 	},
	{
      label: "金额",
      field: 'amount',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '资产名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入资产名称!'},
          ];
     },
  },
  {
    label: '家庭成员',
    field: 'member',
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
    label: '资产类别',
    field: 'assetType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"asset_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入资产类别!'},
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



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}