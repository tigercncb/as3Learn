class TriangleFormula
{
    /**
     * 三角函数相关：：：：：
     * 
     * 度：degree（角的度数）    弧度：radian   角度：angle
     * 转换公式：
     * radians=degrees*Math.PI/180
     * degrees=radians*180/Math.PI
     * 
     * 一个角相对的(opposite)边，相邻(adjacent)边
     * 备注：只适用于直角，非直角需要切成两个直角三角形
     * 1：正弦sine   一个角的正弦是这叫的对边与斜边之比
     *      a=Math.sin(radian)         例如 0.5=Math.sin(30*Math.PI/180)  30为角度
     * 2：余弦cosine   角的邻边与斜边的比例
     *      a=Math.cos(radian)          例如：0.865=Math.cos(30*Math.PI/180)      
     * 3：正切tangent   角的对边与领边的关系
     *      a=Math.tan(angle)
     * 4：反正弦arcsine   
     *      angle=Math.asin(a)*180/Math.PI   例如：30=Math.asin(0.5)*180/Math.PI   (弧度转换成角度以方便查看)
     * 5：反余弦arccosine  
     *      angle=Math.acos(a)*180?Math.PI  例如：30=Math.acos(0.865)*180/Math.PI 
     * 6：反正切arctangent  只需要提供对边和领边的比例，就会得到那个角度
     *      angle=Math.atan(a)*180/Math.PI
     *      angle=Math.atan2(y,x)*180/Math.PI
     * 
     */
    constructor()
    {
    }
}