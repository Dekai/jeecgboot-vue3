-- 注意：该页面对应的前台目录为views/rr.expense文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('202305281112430060', NULL, '支出表', '/rr.expense/expenseList', 'rr.expense/ExpenseList', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 1, 0, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202305281112430061', '202305281112430060', '添加支出表', NULL, NULL, 0, NULL, NULL, 2, 'rr.expense:rr_expense:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202305281112430062', '202305281112430060', '编辑支出表', NULL, NULL, 0, NULL, NULL, 2, 'rr.expense:rr_expense:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202305281112440063', '202305281112430060', '删除支出表', NULL, NULL, 0, NULL, NULL, 2, 'rr.expense:rr_expense:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202305281112440064', '202305281112430060', '批量删除支出表', NULL, NULL, 0, NULL, NULL, 2, 'rr.expense:rr_expense:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202305281112440065', '202305281112430060', '导出excel_支出表', NULL, NULL, 0, NULL, NULL, 2, 'rr.expense:rr_expense:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202305281112440066', '202305281112430060', '导入excel_支出表', NULL, NULL, 0, NULL, NULL, 2, 'rr.expense:rr_expense:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-28 11:12:06', NULL, NULL, 0, 0, '1', 0);