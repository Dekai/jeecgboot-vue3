import {defHttp} from '/@/utils/http/axios';

enum Api {
  EXPENSE_CATEGORY = '/rr/dashboard/expenseCategories',
  ASSET_CATEGORY = '/rr/dashboard/assetCategories'
}

export const listExpenseCategories = (params) => {
  return defHttp.get({url: Api.EXPENSE_CATEGORY, params: params});
}

export const listAssetCategories = (params) => {
  return defHttp.get({url: Api.ASSET_CATEGORY, params: params});
}
