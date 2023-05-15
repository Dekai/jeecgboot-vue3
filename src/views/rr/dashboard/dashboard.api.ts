import {defHttp} from '/@/utils/http/axios';

enum Api {
  EXPENSE_CATEGORY = '/rr/dashboard/expenseCategories'
}

export const listExpenseCategories = (params) => {
  return defHttp.get({url: Api.EXPENSE_CATEGORY, params: params});
}
