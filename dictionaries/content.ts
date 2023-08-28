interface DictionaryEntry {
    // DASHBOARD //
    welcome : string, //welcome, Thanh Tam
    greeting: string, //Good evening
    tasklist_name: string, //Task List
    dailytask_name: string, //Daily task
    add_name: string, //Add in button
    modal_name: string, //Enter task in modal
    cancel_name: string, //Cancel button in modal
    delete_name: string, //Delete button in task list
    logout_name: string, //Log out button
    language_name: string, //Language button

    // HOME //
    title: string,
    home_greeting: string,
    home_button: string,

    // SIGN UP //
    s_u_greeting: string,
    s_u_quote: string,
    s_u_question: string,
    s_u_button: string,
    placehoder_fullname: string,
    placehoder_email: string,
    placeholder_pass: string,
    placeholder_cf_pass: string,

    // SIGN IN //
    s_i_button: string,
    s_i_greeting: string,
    s_i_quote: string,

    // REDIRECT //
    re_quote: string,
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        welcome: 'Welcome',
        greeting: 'Good evening',
        tasklist_name: 'Task List',
        dailytask_name: 'Daily task',
        add_name: 'Add',
        modal_name: 'Enter Task',
        cancel_name: 'Cancel',
        delete_name: 'Delete',
        logout_name: 'Log out',
        language_name: 'Language',
        title: 'Get Things Done With TODO',
        home_greeting: 'Hello there, wishing you a day filled with joy and accomplishment. Remember to seize every opportunity and make the most of this journey.',
        home_button: 'Get Started',
        s_u_greeting: 'Welcome User',
        s_u_quote: 'Lets Get Sign Up to add tasks',
        s_u_question: 'Already have an Account',
        s_u_button: 'Sign Up',
        placehoder_fullname: 'Enter your fullname',
        placehoder_email: 'Enter your email',
        placeholder_pass: 'Enter your password',
        placeholder_cf_pass: 'Confirm your password',
        s_i_button: 'Sign In',
        s_i_greeting: 'Welcome back',
        s_i_quote: 'Dont have an Account',
        re_quote: 'Please wait',
    },
    vi: {
        welcome: 'Mừng trở lại',
        greeting: 'Chiều tốt',
        tasklist_name: 'Danh sách công việc',
        dailytask_name: 'Công việc hằng ngày',
        add_name: 'Thêm',
        modal_name: 'Nhập công việc',
        cancel_name: 'Hủy',
        delete_name: 'Xóa',
        logout_name: 'Đăng xuất',
        language_name: 'Ngôn ngữ',
        title: 'Mọi việc hoàn thành với Ứng dụng quản lý công việc!',
        home_greeting: 'Chúng ta hòa mình vào một ngày mới, với những trang mới và cơ hội đang chờ đón. Hãy cùng đối diện với những thách thức và hoàn cảnh với tinh thần lạc quan và sự kiên nhẫn.',
        home_button: 'Bắt đầu',
        s_u_greeting: 'Chào bạn',
        s_u_quote: 'Hãy đăng ký để sử dụng',
        s_u_question: 'Bạn đã có Tài khoản',
        s_u_button: 'Đăng ký',
        placehoder_fullname: 'Nhập họ và tên',
        placehoder_email: 'Nhập email',
        placeholder_pass: 'Nhập mật khẩu',
        placeholder_cf_pass: 'Xác nhận lại mật khẩu',
        s_i_button: 'Đăng nhập',
        s_i_greeting: 'Mừng trở lại',
        s_i_quote: 'Bạn không có tài khoản',
        re_quote: 'Xin chờ'
    }
}