"use strict";var newsData={news:'<span><h3><a href="#">Lorem ipsum delor</a></h3><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></span><span><h3><a href="#">Lorem ipsum delor</a></h3><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></span><span><h3><a href="#">Lorem ipsum delor</a></h3><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></span>',archive:'<span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span>'};$(document).ready(function(){$.get("scripts/data/code-test.json",function(a){var b=$(".rates_table tbody");a.forEach(function(a,c,d){var e="<tr>";e+="<td>"+a.name+"</td>",e+="<td>"+a.apy+" %</td>",e+="<td>$"+a.earnings+"</td>",e+="</tr>",b.append(e)})}),$(".tab_button").click(function(){var a=$(this);a.hasClass("active")||($(".tab_button.active").removeClass("active"),a.addClass("active"),$(".tab_content").html(newsData[a.attr("id")]))}),$(".nav_select").click(function(){var a=$(this);a.hasClass("active")||$(".nav_select").each(function(b,c){$(c).hasClass("active")?$(c).removeClass("active"):$(c).attr("name")===a.attr("name")&&$(c).addClass("active")})}),$(".login_toggle").click(function(){var a=$(document).height();$("#overlay").height(a),$(".modal_grp").toggle()})});