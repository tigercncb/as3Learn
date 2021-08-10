class TriangleFormula
{
    /**
     * 三角函数相关：：：：：
     * 
     * 度:degree(角的度数)    弧度:radian   角:angle
     * 转换公式：
     * radians=degrees*Math.PI/180
     * degrees=radians*180/Math.PI
     * 
     * 一：基本公式
     * 一个角相对的(opposite)边，相邻(adjacent)边
     * 备注：只适用于直角，非直角需要切成两个直角三角形
     * 1：正弦sine   一个角的正弦是这角的对边与斜边之比
     *      a=Math.sin(radians)         例如 0.5=Math.sin(30*Math.PI/180)  30为角度
     * 2：余弦cosine   角的邻边与斜边的比例
     *      a=Math.cos(radians)          例如：0.865=Math.cos(30*Math.PI/180)      
     * 3：正切tangent   角的对边与领边的关系
     *      a=Math.tan(radians)  0.577=Math.tan(30*Math.PI/180)
     * 4：反正弦arcsine   提供一个比例，得到一个角（弧度）
     *      angle=Math.asin(a)*180/Math.PI   例如：30=Math.asin(0.5)*180/Math.PI   (弧度转换成角度以方便查看)
     * 5：反余弦arccosine   提供一个比例，得到一个角（弧度）
     *      angle=Math.acos(a)*180?Math.PI  例如：30=Math.acos(0.865)*180/Math.PI 
     * 6：反正切arctangent  只需要提供对边和领边的比例，就会得到那个角度,a:正切值
     *     6.1数学式 
     *          angle=Math.atan(a)*180/Math.PI      例如 30=Math.atan(0.577)*180/Math.PI
     *     6.2程序式 重点（常用）：程序中的反正切   
     *          弧度:radians=Math.atan2(y,x)
     *          angle=radians*180/Math.PI   例如 三角形在坐标系0点坐标 -153=Math.atan2(-1,-2)*180/Math.PI (注意：逆时针旋转，而不是从左边-1旋转)
     * 
     * 
     * 二、关系：
     * sin30°=1/2, sin60°=√3/2  sin45°=√2/2 
     * cos60=1/2    cos30°=√3/2 cos45°=√2/2
     * 
     * 锐角:sinX=cos(90°-X) 即：sinX+cos(90°-X)=1
     */
    constructor()
    {
        
    }
}