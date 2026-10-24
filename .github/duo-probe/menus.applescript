-- Lists every Simulator menu item (two levels deep) and clicks the first
-- item whose name matches the argument, if one is given.
on run argv
	set target to ""
	if (count of argv) > 0 then set target to item 1 of argv
	set out to ""
	set clicked to false
	tell application "System Events" to tell process "Simulator"
		set frontmost to true
		repeat with m in (menus of menu bar 1)
			set mName to ""
			try
				set mName to name of m as text
			end try
			repeat with mi in (menu items of m)
				set miName to ""
				try
					set miName to name of mi as text
				end try
				if miName is not "" and miName is not "missing value" then
					set out to out & mName & " > " & miName & linefeed
					if target is not "" and not clicked and miName is target and mName is not "File" and mName is not "Edit" and mName is not "Window" then
						click mi
						set clicked to true
						set out to out & "CLICKED " & mName & " > " & miName & linefeed
					end if
					try
						repeat with smi in (menu items of menu 1 of mi)
							set smiName to ""
							try
								set smiName to name of smi as text
							end try
							if smiName is not "" and smiName is not "missing value" then
								set out to out & mName & " > " & miName & " > " & smiName & linefeed
								if target is not "" and not clicked and smiName is target and mName is not "File" and mName is not "Edit" and mName is not "Window" then
									click smi
									set clicked to true
									set out to out & "CLICKED " & mName & " > " & miName & " > " & smiName & linefeed
								end if
							end if
						end repeat
					end try
				end if
			end repeat
		end repeat
	end tell
	return out
end run
