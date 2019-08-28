let UserFactory=function(role){
    // 超级用户
    function SuperAdmin(){
        this.name='超级管理员'
        this.viewPage=['系统管理','用户管理','仓库管理','订单管理','出库管理','财务管理']
    }
    // admin
    function Admin(){
        this.name='一级管理员'
        this.viewPage=['用户管理','仓库管理','订单管理']
    }
    // 普通用户
    function User(){
        this.name='普通管理员'
        this.viewPage=['仓库管理','订单管理']
    }
    switch(role){
        case 'SuperAdmin':
        return new SuperAdmin()
        break
        case 'Admin':
        return new Admin()
        break
        case 'User':
        return new User()
        break
        default:
        throw new Error('参数错误,可选参数:SuperAdmin、Admin、User')
    }
}
let superAdmin =new UserFactory('SuperAdmin')
let Admin =new UserFactory('Admin')
let User =new UserFactory('User')
// 这个栗子就是一个工厂函数,在函数内部有3个构造函数,分别对应的不同用户的权限,我们调用的时候只需要传递superAdmin, admin, user参数就可以了.
// 优点:
// 你只需要一个正确的参数.就可以获取到你所需要的对象.无需知道创建的细节
// 缺点:
// 在函数内包含了所有的代码.每新增一个构造函数,就要去改变修改判断逻辑.  简单工厂函数只适用于 构造函数少的时候



//2 安全模式下的工厂模式
function UserFactorySafe(role){
    if(this instanceof UserFactorySafe){
        return new this[role]()
    }else{
        return new UserFactorySafe(role)
    }
}
UserFactorySafe.prototype.SuperAdmin=function(){
    this.name='超级管理员'
    this.viewPage=['系统管理','用户管理','仓库管理','订单管理','出库管理','财务管理']
}
UserFactorySafe.prototype.Admin=function(){
    this.name='一级管理员'
    this.viewPage=['用户管理','仓库管理','订单管理']
}
UserFactorySafe.prototype.User=function(){
    this.name='普通管理员'
    this.viewPage=['仓库管理','订单管理']
}