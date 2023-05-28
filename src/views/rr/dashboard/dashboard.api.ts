import {defHttp} from '/@/utils/http/axios';

enum Api {
  EXPENSE_CATEGORY = '/rr/dashboard/expenseCategories',
  INCOME_CATEGORY = '/rr/dashboard/incomeCategories',
  ASSET_CATEGORY = '/rr/dashboard/assetCategories',
  STATUS_DATA = '/rr/dashboard/statusData',
  MONTH_EXPENSE = '/rr/dashboard/monthExpenses',
  MONTH_EXPENSE_BAR = '/rr/dashboard/monthExpenseBar',
}

export const listExpenseCategories = (params) => {
  return defHttp.get({url: Api.EXPENSE_CATEGORY, params: params});
};

export const listAssetCategories = (params) => {
  return defHttp.get({url: Api.ASSET_CATEGORY, params: params});
};

export const listIncomeCategories = (params) => {
  return defHttp.get({url: Api.INCOME_CATEGORY, params: params});
};

export const getStatusData = (params) => {
  return defHttp.get({url: Api.STATUS_DATA, params: params});
};

export const listMonthExpense = (params) => {
  return defHttp.get({url: Api.MONTH_EXPENSE, params: params});
};

export const listMonthExpenseBar = (params) => {
  return defHttp.get({url: Api.MONTH_EXPENSE_BAR, params: params});
};
